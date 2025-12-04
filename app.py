from flask import Flask, render_template, request, session, redirect, url_for
import os

app = Flask(__name__)
app.secret_key = "forever_caren_2025"  # Change this to anything secret

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/password')
def password():
    return render_template('password.html')

@app.route('/check', methods=['POST'])
def check():
    if request.form['pass'] == 'soulmate':
        session['authenticated'] = True
        return redirect('/diary/1')
    return render_template('password.html', error="Wrong password my love ❤️ Try again")

@app.route('/diary/<int:page>')
def diary(page):
    if not session.get('authenticated'):
        return redirect('/password')
    if page < 1 or page > 6:
        return redirect('/diary/1')
    return render_template('diary.html', page=page)

@app.route('/logout')
def logout():
    session.pop('authenticated', None)
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)