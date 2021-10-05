from flask import Flask, request, jsonify
from db_connect import db
from flask_migrate import Migrate
from models import *
from flask_cors import CORS
from flask_jwt_extended import *
from oauth2client.contrib.flask_util import UserOAuth2

import config

def create_app():
    app = Flask(__name__)
    jwt = JWTManager(app)
    CORS(app)
    # 구글 로그인 API 아이디, 시크릿 키
    app.config['GOOGLE_OAUTH2_CLIENT_ID'] = '195638739398-jn922qcfqb019vohkavmdju1pa5hr5ld.apps.googleusercontent.com' 
    app.config['GOOGLE_OAUTH2_CLIENT_SECRET'] ='b2ZjU_g88JrQQ3UA1EMGnaXT'
    app.config.from_object(config)
    

    db.init_app(app)
    Migrate().init_app(app, db)


    from views import signup, signin, main, movie_list, tv_list
    app.register_blueprint(signup.bp)
    app.register_blueprint(signin.bp)
    app.register_blueprint(main.bp)
    app.register_blueprint(movie_list.bp)
    app.register_blueprint(tv_list.bp)

    return app


if __name__ == '__main__':
    create_app().run('0.0.0.0', 5000, debug=True)