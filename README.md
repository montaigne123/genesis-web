# Documentation for Genesis

This website was build using [`jQuery`](https://jquery.com/) in the Frontend. And Python Flask server at the backend.

Here is a full list of dependencies used:
* `Bootstrap`
* `Fontawesome icons`
* `chart.js`
* `datatables`
* `date-range`
* `jQuery`

All the static content should be kept in `static` folder. Whereas the bare HTML files hereafter referred as templates are stored in `templates` directory.

---

To run the project:
```bash
$ git clone https://github.com/montaigne123/genesis-web
$ cd genesis-web
$ pip install requirements.txt
$ python application.py
```
Now you'll have the project running on your localhost at port 5000.

## Folder structure

There are 2 main folders :

1. static
2. templates

As mentioned above All the static content should be kept in `static` folder and the templates are stored in `templates` directory.

### `./static`

As the name suggests `./static` directory contains all the static content in the website. All the Cascading Style Sheets (CSS), JavaScript files, And images, icons, resources, etc are stored in this folder.

### `./templates`

All the templates used in the website are placed in this folder. The templates basically follow Jinja Templating style to reuse header, sidebar and footer.

Example: {% include 'header.html' %}

---
## Functions:

Most of the functions are self-contained. Here is an outline of all the functions used in this project:

* `newDate(date)`
* `getRandomColor()`
* `getAllTheDatesInThisDateRange(from, to, type)`
* `getChartDataFromRemoteServer(fromDate, ToDate)`
* `loadCompetitorsChart(yesterday)`
* `loadSpecificKeywordChart(capturedKeyword)`
* `loadDataForASingleKeyword(input)`
* `removeSpecialCharacters(input)`
* `AddOptionsInkeywordsSelector()`
* `addDomainInDB()`
* `loadDataForKeywordRanks(startDate, endDate)`
* `loadDataForCompetitors(startDate, endDate)`
* `reloadTable()`
* `deleteKeywords(dataForDeletingKeywords)`
* `applyBatchAction(selectedAction, isManageTable)`
* `addSelectorForMultipleActionsOnKeywords()`
* `loadKeywordRanksFromFirebase(date, isYesterday)`
* `loadTableManageKeywordsAndGroups()`
* `loadTableRanks(data, fromDateForChart, toDateForChart, updateChart)`
* `loadTableRanksForSingleKeyword(data, fromDateForChart, toDateForChart, updateChart)`
* `loadTableCompetitor(data)`
* `importKeywords()`
* `fileUploaderAndReader(csvFile)`
* `addKeywordToDB(keywordsArray, group)`
* `addCompetitors()`
* `getLastPositionData(selectedPosition, startDate, endDate)`

The name of each function is descriptive enough to give some idea about the usage and the contents of each function.


---

## Hosting

The project is hosted on Heroku.
You need to push this codebase to heroku server via heroku cli to update anything.
Here's the live project's URL: http://genesis-web.herokuapp.com
