# импортируем фласк 
from flask import Flask, request, send_from_directory

# импортируем бибилотеки для cors чтобы запросы проходили 
from flask_cors import CORS

# импортируем бибилотеку для работы с почтой
from flask_mail import Mail, Message

# видимо инициализируем проект и подключаемые бибилотеки
app = Flask(__name__, static_folder='./')
CORS(app)

app.config['MAIL_SERVER'] = 'smtp.yandex.ru'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'broke1@yandex.ru'
app.config['MAIL_PASSWORD'] = 'xrduuuyugybvzkch'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True

mail= Mail(app)

@app.route('/')
def index():
    # тут просто пробрасываем файлик, без всякого препроцессинга
    return app.send_static_file("index.html")

@app.route('/<path:path>')
def static_dist(path):
    # тут пробрасываем статику
    return send_from_directory("./", path)

# на этот url фронт отправляет форму  
@app.route('/sendForm',  methods=['POST'])   


# метод вызывается когда идет запрос на url выше
def sendForm(): 
      msg = Message('AnalizMos', sender = 'broke1@yandex.ru', recipients = ['fredsmamail@gmail.com'])
      msg.body = f"Имя:   {request.json['name']} \r\nТелефон:   {request.json['phone']} \r\nТекст:   {request.json['text']}"
      mail.send(msg)
      return request.json["name"]

# тут видимо указываем на каком порту будем слушать запросы с фронта (на каком фласк поднимется)
if __name__ == '__main__': 
    app.run(debug=True, port=80) 