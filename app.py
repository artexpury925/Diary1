from flask import Flask, render_template, request, session, redirect, url_for

app = Flask(__name__)
app.secret_key = "caren_my_wife_forever"

# ============== PASSWORD PAGE (FIRST THING VISITORS SEE) ==============
@app.route('/')
def password_page():
    if session.get('auth'):
        return redirect('/diary/1')
    return '''
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>For My Soulmate Only</title>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Great+Vibes&display=swap" rel="stylesheet">
        <style>
            body { margin:0; height:100vh; background:linear-gradient(135deg,#ff1493,#8B008B,#000); 
                   display:flex; align-items:center; justify-content:center; color:white; font-family:Georgia; text-align:center; }
            .box { background:rgba(0,0,0,0.6); padding:70px 50px; border-radius:30px; max-width:90%; backdrop-filter:blur(10px); 
                   border:3px solid #ff69b4; }
            h1 { font-family:'Great Vibes',cursive; font-size:4.5rem; margin-bottom:20px; }
            p { font-size:1.4rem; margin:20px 0; }
            input { padding:18px; width:320px; font-size:1.5rem; border:none; border-radius:50px; margin:20px auto; display:block; text-align:center; }
            button { padding:18px 50px; font-size:1.6rem; background:#ff1493; color:white; border:none; border-radius:50px; 
                     cursor:pointer; box-shadow:0 10px 30px rgba(0,0,0,0.5); }
            button:hover { background:#ff69b4; transform:scale(1.05); }
            .wrong { color:#ff6b6b; font-size:1.3rem; margin-top:15px; }
        </style>
    </head>
    <body>
        <div class="box">
            <h1>My Eternal Love<br>Caren Chelangat Ronoh</h1>
            <p>From the day I saw you at Seretet Secondary School,<br>my heart has belonged to you and only you.</p>
            <h2>Only my soulmate can enter this diary</h2>
            <form action="/login" method="post">
                <input type="password" name="pwd" placeholder="Password (small letters)" required autofocus>
                <br>
                <button type="submit">Enter My Love Diary</button>
            </form>
            {% if error %}<p class="wrong">{{ error }}</p>{% endif %}
        </div>
    </body>
    </html>
    '''

# ============== CHECK PASSWORD ==============
@app.route('/login', methods=['POST'])
def login():
    if request.form['pwd'].strip().lower() == 'soulmate':
        session['auth'] = True
        return redirect('/diary/1')
    else:
        return password_page() + '<p class="wrong">Wrong password my love… try again</p></div></body></html>'

# ============== DIARY PAGES (1 to 6) ==============
@app.route('/diary/<int:p>')
def diary(p):
    if not session.get('auth'):
        return redirect('/')
    if p < 1 or p > 6:
        return redirect('/diary/1')
    return render_template('diary.html', page=p)

# Optional: logout
@app.route('/logout')
def logout():
    session.pop('auth', None)
    return redirect('/')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)