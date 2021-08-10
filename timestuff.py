import datetime as dt

today = dt.datetime.today()
midnight = dt.datetime.time(hour=0,minute=0,second=0)
today = dt.datetime.combine(today,midnight)

now = dt.datetime.now()
now = now.timestamp()
print(today)
print(now)