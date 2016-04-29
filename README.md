# eComm
###
## Purpose
This project is aimed at building an open-source e-commerce platform based on [AngularJS](https://angularjs.org/) using a cutting-edge technology stack. I am building an efficient and rich user interface for this online shopping application.

The eComm is aimed to be a modular platform which allows merchants to configure, supplement or replace any functionality they need. As an owner of website, the application allows you to fully control your e-Commerce website by defining your products, product categories, different types of offers, etc. And as a customer, you have a few features such as shopping cart, product advanced search, feedback, etc.

## Installation
###
You need to install the latest [Node.js](http://nodejs.org/download/) at the first.

* You need to install Yeoman to scaffolding the application: 
```
npm install -g yo
```

* Create eComm (working directory) folder, and go into: 
```
mkdir eComm && cd $_
```

* Run the below command and select desired technologies:
```
yo gulp-angular
```
    Note: Don't select the unnecessary options except Less, like the below picture:

<img src="https://github.com/mparhiz/eComm/tree/master/img/eComm.png">

* Delete the unnecessary folders and files:
```
rm -r src bower-components
```
* Exit from the current folder and clone this repository
```
cd ..
git clone https://github.com/mparhiz/eComm.git
```

* Go into the eComm folder again and run the below commands:
```
cd eComm
npm install
bower install
```

## Running
###

* To run the application just run the Gulp server
```
gulp serve
```

* To run the tests just run the below command:
```
gulp test
```
