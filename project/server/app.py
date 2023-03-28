from flask import Flask, jsonify, request
from flask_cors import CORS

from utils.toJSON import toJSON
from model.Users.user import User
from model.Product.product import Product

people = toJSON([
    User("k@i.ua", "John", "2323"),
])



app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return "<h2>Server works!</h2>"

@app.route('/products')
def prod():  
    print(request.method)
    return jsonify(toJSON([
    Product(
        "Bitcoin",
        22146.55,
        "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/pexels-pixabay-315788-scaled.jpg",
        "Bitcoin is a protocol which implements a highly available, public, permanent, and decentralized ledger."
    ), 
    Product(
        "Ethereum",
        1555.23,
        "https://imageio.forbes.com/specials-images/imageserve/63e5179bc38273483b361abf/Ethereum-coin-token-with-candlestick-chart-background--Digital-currency-/0x0.jpg?format=jpg&width=960",
        "Ethereum is a decentralized, open-source blockchain with smart contract functionality."
    ), 
    Product(
        "Tether",
        1,
        "https://coingeek.com/wp-content/uploads/2020/05/tether-fires-up-money-printer-as-supply-jumps-37-in-a-day.jpg",
        "Tether is an asset-backed cryptocurrency stablecoin."
    ), 
    Product(
        "BNB",
        289.39,
        "https://blog.bitnovo.com/wp-content/uploads/2021/03/Que%CC%81-es-Binance-Coin-BNB-1.jpg",
        "Binance coin (BNB) is the exchange token of the Binance crypto exchange. "
    ), 
    Product(
        "USD Coin",
        1,
        "https://en.cryptonomist.ch/wp-content/uploads/2022/12/usd-coin-usdc-1140x600.jpeg",
        "USDC is a digital dollar, also known as a stablecoin, that's available 24/7 and moves at internet speed."
    ), 
    Product(
        "XRP",
        0.37,
        "https://responsive.fxempire.com/v7/_fxempire_/2022/09/XRP-2-1.jpg?width=1201",
        "Ripple is a real-time gross settlement system, currency exchange and remittance network created by Ripple Labs Inc., a US-based technology company. "
    ), 
]))

# @app.route('/')
# def products():
#     return json.dumps(items)


if __name__ == '__main__':
    app.run(port=3333)
