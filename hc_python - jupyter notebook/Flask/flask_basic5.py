from flask import Flask, redirect, url_for, request

my_count = 0

app = Flask(__name__)
myfrom = """
<html>
    <body>
        <form action="/login" method = "get">
            <p>ID:</p>
            <input type="text" name="user_id"/>
            <p>PW:</p>
            <input type="text" name="user_pw"/>
            <input type="submit" value="GET 입력"/>
        </form>

        <form action="/login" method = "post">
            <p>ID:</p>
            <input type="text" name="user_id"/>
            <p>PW:</p>
            <input type="text" name="user_pw"/>
            <input type="submit" value="POST입력"/>
        </form>
    </body>
</html>
"""

@app.route("/")
def home():
    return myfrom

#rest(ful) api
@app.route("/login", methods = ["POST", "GET"])
def login():
    if request.method == "GET":
        user_id = request.args.get("user_id")
        user_pw = request.args.get("user_pw")

    # user_id = input("ID:")
    # user_pw = input("PW:")
        if user_id == "Jo" and user_pw == "1234":
            return redirect(url_for('success')) # 함수 이름 넣어야함
        return "ID 와 PW가 틀렸습니다."
    else:
        user_id = request.form["user_id"]
        user_pw = request.form["user_pw"]
        if user_id == "Jo" and user_pw == "1234":
            return redirect(url_for('success'))
        return "GET아님"

@app.route("/success")
def success():
    return "환영합니다. 웹 서비스를 시작합니다."


if __name__ == "__main__":
    app.run(host="localhost", port=5000, debug=True)