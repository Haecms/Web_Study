from flask import Flask, render_template, request

from sklearn.datasets import load_iris
from sklearn.tree import DecisionTreeClassifier
iris = load_iris()
dt = DecisionTreeClassifier()
dt.fit(iris.data, iris.target)

my_count = 0

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("iris_home.html")

@app.route("/input")
def input_values():
    return render_template("iris_input.html")

@app.route("/result", methods = ["GET"])
def ML_test():
    sepal_length = request.args.get("sepal_length")
    sepal_width = request.args.get("sepal_width")
    petal_length = request.args.get("petal_length")
    petal_width = request.args.get("petal_width")
    flower = ["setosa", "versicolor", "virginica"]
    
    sample = [sepal_length, sepal_width, petal_length, petal_width]
    label = int(dt.predict([sample]))

    return render_template("iris_result.html", flower=flower[label])
    #return f"이 꽃은 {flower[label]}입니다."




if __name__ == "__main__":
    app.run(host="localhost", port=5000, debug=True)