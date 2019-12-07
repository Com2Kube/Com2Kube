from flask import Flask
from flask import flash, request, redirect, url_for, send_from_directory, session
import os, random, threading, time, shutil
from werkzeug.utils import secure_filename


app = Flask(__name__)

ALLOWED_EXTENSIONS = {'txt', 'yml'}
UPLOAD_FOLDER = '/app/uploads' #This folder is necessary for the applitcations to run
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/', methods=['GET','POST'])
def upload_file():
    if request.method == 'POST':
        # check if the post request has the file part
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        file = request.files['file']
        # if user does not select file, browser also
        # submit an empty part without filename
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)   
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            folder = random.randint(100000000000000000000, 999999999999999999999)
            folder = str(folder)
            os.mkdir(app.config['UPLOAD_FOLDER'] + "/" + folder)
            filepath = os.path.join(app.config['UPLOAD_FOLDER'], folder, filename)
            file.save(filepath)
            
            #Delete folder after it's been downloaded
            full_path = app.config['UPLOAD_FOLDER'] + "/" + folder
            thread = threading.Thread(target=cleanup, args=(full_path,))
            thread.start()
            
            #os.system(f"kompose convert -f {filepath}")
            return redirect(url_for('serve_static', path=folder+"/"+filename))
            


@app.route('/api/backend-status')
def backend_status():
    return "I'm here"

@app.route('/downloadable/<path:path>')
def serve_static(path):
    root_dir = os.getcwd()
    path = os.path.split(path)
    folder = app.config['UPLOAD_FOLDER'] + "/" + path[0]
    print("serving " + folder, flush = True)
    return send_from_directory(folder, path[1], as_attachment=True)

def cleanup(folder):
    print("deleteing... " + folder, flush=True)
    time.sleep(2)
    try:
        shutil.rmtree(folder)
    except:
        print("error deleting " + folder, flush=True)
    
if __name__ == "__main__":
    app.run(host='0.0.0.0')
