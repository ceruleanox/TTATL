import requests
import csv

API_KEY = ''

def getData():
    symbols = ['DIS', 'BA', 'FB', 'JPM']
    for symbol in symbols:
        req = requests.get('https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol='+ symbol + '&apikey=' + API_KEY)
        res = req.json()
        monthsData = res['Monthly Time Series']

        # write in csv file
        header = ['symbol', 'year', 'price']
        with open('./' + symbol + '.csv', 'w') as csvFile:
            csvWriter = csv.writer(csvFile)  
            csvWriter.writerow(header)  
            
            for date in monthsData:
                year = date[:4]
                # get only january data from 2014-2020
                if '-01-' in date and int(year) >= 2014 and int(year) <= 2020:
                    yearData = monthsData[date]
                    price = int(float(yearData['1. open']))
                    csvWriter.writerow([symbol, year, price])

    print('Done!')

getData()