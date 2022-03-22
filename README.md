# Ecologi coding assignment

## How to run in development mode locally

```
npm install
npm start
```

## How to use

When arriving on the page you will see a loading icon, once the page is loaded, select date ranges using the calendars to view a specific range of data.

## Assumptions

I've made a fair amount of assumptions for this assignment.  
First of all, I assumed that each individual array in the response data is [number of trees planted, epoch of when it was planted].  
Based on that, I grouped the different 'numbers of trees' by day (the data containing multiple instances of tree planted for a same day). Also, data concerning a same day is not always consecutive (which is why I used an aggregation map and not a dynamic programming approach to concatenate the data).
I also assumed that when the number of trees was not an integer, it was invalid. I also set an upper limit of 2 million (it felt like a reasonable upper bound for a day considering the maximum number of trees planted by ecologi in a month is 3M according to https://docs.google.com/spreadsheets/d/1dACvzjE5nBE1cKZBAhYzsUa7rIiLJqCWXVgY4bNS8_Q/edit#gid=652087649).

## What would I change for production

The dataset is relatively large and takes a lot of front-end processing to display.  
Therefore, should I change the api, I would make it already aggregate the data by day before sending it to the front-end (which would make the data change from +- 300.000 points to less than 1000).

Given more time, I would also change the way I handle the x axis scale, to show a different granularity based on the zoom level (for instance, showing months rather than days when viewing a whole year);
