import numpy as np
from gensim.models.doc2vec import Doc2Vec

model = Doc2Vec.load('resume_job.model')
def get_similarity_list(jd_df_str,resume_list):
    cos_sim_list = []
    v2 = model.infer_vector(jd_df_str.split(' '), alpha=0.025)
    v2 = np.array(v2)
    for i in range(len(resume_list)) :
        v1 = model.infer_vector(resume_list[i].split(' '), alpha=0.025)
        v1 = np.array(v1)
        cosine_similarity = (np.dot(v1, v2)) / (np.linalg.norm(v1) * np.linalg.norm(v2))
        final_cos = round(cosine_similarity, 3)
        cos_sim_list.append(final_cos)

    print(cos_sim_list)
    return(cos_sim_list)