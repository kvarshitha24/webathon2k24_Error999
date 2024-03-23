from flask import Flask, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from flask import  request
from bson.binary import Binary
import PyPDF2
import io 


app = Flask(__name__)
CORS(app)
client = MongoClient('mongodb://localhost:27017/')
db = client['sample1']
collection = db['pdf_files']
collection2=db['ans_files']


@app.route('/uploadques', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return 'No file part'
    file = request.files['file']
    
    if file.filename == '':
        return 'No selected file'

    data = file.read()
    print(file.filename)
    pdf_data = Binary(data)
    pdf_reader = PyPDF2.PdfReader(io.BytesIO(pdf_data))
    text=''
    for page_num in range(len(pdf_reader.pages)):
        page = pdf_reader.pages[page_num]
        text += page.extract_text()
    l=text.split("\n")
    d={}
    for i in range(len(l)):
        print(i)
    c=collection.insert_one({"a":text})
    return "hi"


@app.route('/uploadans', methods=['POST'])
def upload_file2():
    if 'file' not in request.files:
        return 'No file part'

    file = request.files['file']
    
    if file.filename == '':
        return 'No selected file'

    data = file.read()
    print(file.filename)
    pdf_data = Binary(data)
    pdf_reader = PyPDF2.PdfReader(io.BytesIO(pdf_data))
    text=''
    for page_num in range(len(pdf_reader.pages)):
        page = pdf_reader.pages[page_num]
        text += page.extract_text()
    l=text.split("\n")
    d={}
    for i in range(len(l)):
        print(i)
    c=collection2.insert_one({"a":text})
    return "hi"

@app.route('/mcq',methods=['GET'])
def get_mcqs():
    mcqs = collection.find_one()  # Assuming you have only one document containing all MCQs
    print(mcqs)
    return jsonify({"message":str(mcqs)})


@app.route('/api/data', methods=['GET'])
def get_data():
    data = {"message": "Hello from Python backend!"}
    #collection.insert_one(data)
    return jsonify(data)



if __name__ == '__main__':
    app.run(debug=True)