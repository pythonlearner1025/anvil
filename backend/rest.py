import json
import os
from tqdm import tqdm
import requests
import urllib.request
from dotenv import load_dotenv


load_dotenv()
URI = os.getenv('CLOUDFLARE_URI')
TOK = os.getenv('CLOUDFLARE_TOK')

def get_all_objs(root):
    res = []
    for concept in root:
        for subconcept in root[concept]:
            for obj in root[concept][subconcept]:
                res.append(obj)
    return res

def down(obj, folder):
    for k in obj:
        f = obj[k].split('/')[-1]
        p = os.path.join(folder, f)
        if os.path.isfile(p): continue
        try:
            urllib.request.urlretrieve(obj[k], p)
        except Exception as e:
            print(obj[k])
            pass

def makeAssets(root):
    res = dict()
    for cat in root.keys():
        res[cat] = []
        cat_dict = root[cat]
        for subcat in cat_dict.keys():
            subcat_dict = dict()
            subcat_dict['name'] = subcat
            subcat_dict['selectableObjects'] = []
            for obj in cat_dict[subcat]:
                object_dict = dict()
                object_dict['name'] = list(obj.keys())[0]
                object_dict['assetPath'] = obj[list(obj.keys())[0]]
                subcat_dict['selectableObjects'].append(object_dict)
            res[cat].append(subcat_dict)
    return res

def cdn_upload(img_path, img_id):

    headers = {
        'Authorization': f'Bearer {TOK}',
    }
    files = {
        'file': open(img_path, 'rb'),
        'id': (None, img_id),
    }
    try:
        response = requests.post(
            URI,
            headers=headers,
            files=files,
        )
        print(response.status_code)
    except Exception as e:
        print(e)

def batch_upload(dir_path, prefix):
    assets = os.listdir(dir_path)
    for i in tqdm(range(len(assets))):
            img_path = os.path.join(dir_path, assets[i])
            img_id = prefix + '_' + os.path.splitext(img_path)[0].split('/')[-1]
            cdn_upload(img_path, img_id)
 


if __name__ == '__main__':
    #with open('cats.json', 'r') as f:
    #    json.load(f)

    '''
    path = os.path.join(os.getcwd(), 'store/sphere')
    with open('sphere.json', 'r') as f:
        root = json.load(f) 
        objs = get_all_objs(root)
        for i in tqdm(range(len(objs))):
            down(objs[i], path)

    path = os.path.join(os.getcwd(), 'store/land')
    with open('land.json', 'r') as f:
        root = json.load(f) 
        objs = get_all_objs(root)
        for i in tqdm(range(len(objs))):
            down(objs[i], path)

    '''
    path1 = os.path.join(os.getcwd(), 'store/base')
    batch_upload(path1, 'base')



