from flask import Flask

from sklearn.datasets import load_iris
from sklearn.tree import DecisionTreeClassifier
iris = load_iris()
dt = DecisionTreeClassifier()
dt.fit(iris.data, iris.target)

my_count = 0

app = Flask(__name__)

@app.route("/")
def home():
    return "조해찬 입니다 ㅍㅋㅍㅋ"



@app.route("/ML_test")
def ML_test():
    flower = ["setosa", "versicolor", "virginica"]
    #sample=[4.9, 3., 1.4, 0.2]
    [a, b, c, d] = map(float, input("꽃의 치수를 입력하세요").split()) # 터미널에 입력해야 함
    sample = [a, b, c, d]
    label = int(dt.predict([sample]))
    # label = 0
    # if 1.0 < sample[2] < 2.0 and 0.1<sample[2] < 1.0:
    #     label = 0
    return f"이 꽃은 {flower[label]}입니다."



if __name__ == "__main__":
    app.run(host="localhost", port=5000, debug=True)