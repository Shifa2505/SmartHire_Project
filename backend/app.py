from flask import *
import pymongo
from flask_cors import CORS, cross_origin
from pyresparser import ResumeParser
from werkzeug.utils import secure_filename
import os
import json,bson
import docx2txt as d2t
from similarity import get_similarity_list


mongo_client = pymongo.MongoClient("mongodb://localhost:27017/")
smart_hire_db = mongo_client["smart_hire"]
applicants_col = smart_hire_db["applicants"]
company_col = smart_hire_db["company"]
jobs_col = smart_hire_db["jobs"]
# print(applicants_col)

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

@app.route("/get_applicants")
@cross_origin()
def get_applicants():
    data=applicants_col.find({},{"_id":0,"name":1})
    s=[]
    for x in data:
        s.append(x)
    return str(s)


@app.route("/api/add_applicant",methods=["POST"])
def add_applicant():
    # s = ""
    # doc = request.form.to_dict()
    # s+=str(doc)
    # applicants_col.insert_one(doc)
    # return s+"<br>New file created."
    # print(request.json)
    f = request.files["resume"]
    print(type(f))
    f.save(secure_filename(f.filename))
    t = ResumeParser((f.filename).replace(" ","_")).get_extracted_data()
    # print(type(t))
    # os.remove(f.filename)
    # json_doc = json.dumps(t,indent=4)
    # with open(f.filename,"rb") as file:
    #     t["resume_doc"]=file.read()
    t["resume_text"] = d2t(f.filename)
    applicants_col.insert_one(t)
    # print(len(str(t)))
    # d = json.dumps(t,indent=4)
    t.pop("_id")
    # t.pop("resume_doc")
    print(json.dumps(t))

    return json.dumps(t)

@app.route("/api/add_company",methods=["POST"])
def add_company():
    doc = request.form.to_dict()
    company_col.insert_one(doc)
    print(doc["_id"],type(doc["_id"]))
    
    return str(doc.get("_id"))

@app.route("/api/add_job",methods=["POST"])
def add_job():
    doc = request.form.to_dict()
    jobs_col.insert_one(doc)
    print(doc["_id"],type(doc["_id"]))
    
    return str(doc.get("_id"))


@app.route("/get_similarity_list/<jid>")
def get_list(jid):
    jid = str(jid)
    # x = jobs_col.find({"_id":bson.ObjectId("6416a20aa07330260def566f")})
    x = jobs_col.find({"_id":bson.ObjectId(jid)})
    job_desc = x[0].get("Jdescription") # This is the job description

    applicants = applicants_col.find({},{"resume_text":1,"name":1,"mobile":1})
    applicants_resume = [x.get("resume_text") for x in applicants]

    jfs_score = get_similarity_list(job_desc,applicants_resume)
    a = applicants.clone()
    for i in range(len(applicants_resume)):
        a[i]["jfs_score"] = jfs_score[i]
    for i in a:
        print(i.get("name"), i.get("jfs_score"))

    
    
    # return(str([i["Jdescription"] for i in x]))
    return("done")


if(__name__=="__main__"):
    port = 8000
    app.run(port=port,debug=True,host="0.0.0.0")
    print(f"Server Running on {port}")
