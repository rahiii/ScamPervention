from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/learn-scams')
def learn_scams():
    return render_template('learn-scams.html')

@app.route('/resources')
def resources():
    return render_template('resources.html')

@app.route('/scams/phishing_scams')
def phishing_scams():
    return render_template('scams/phishing_scams.html')

@app.route('/scams/ticket_scams')
def ticket_scams():
    return render_template('scams/ticket_scams.html')

@app.route('/scams/shopping_scams')
def shopping_scams():
    return render_template('scams/shopping_scams.html')

@app.route('/scams/employment_scams')
def employment_scams():
    return render_template('scams/employment_scams.html')

@app.route('/scams/tech_support_scams')
def tech_support_scams():
    return render_template('scams/tech_support_scams.html')

@app.route('/scams/social_media_scams')
def social_media_scams():
    return render_template('scams/social_media_scams.html')


if __name__ == '__main__':
    app.run(debug=True)