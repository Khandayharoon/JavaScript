# JavaScript Beginner Challenges

## Introduction

These challenges are meant to give you an inspiration for applying JavaScript in a beginner context.

This folder contains different challenges for people beginning to program with JavaScript. For the sake of simplicity, there are no further dependencies or tests.

In every folder is an assignment.md file that contains the assignment and an index.js that will contain your JavaScript program. An index.html file is the entry point to your JavaScript program. It contains a reference to the index.js file but you don't have to worry about that in this moment.

Actually, the only thing you need to worry about is to put the code in the index.js file. You can test your code manually by opening the index.html file with your prefered browser.

These challenges are from [Codecademy](https://www.codecademy.com/resources/blog/10-javascript-code-challenges-for-beginners/).

### Remarks on JavaScript

JavaScript has become a full-stack option to develop web apps. But to keep it simple, we will start with JavaScript as the scripting language web pages.

Therefore, no other tools like node or npm are necessary. 

## Recommended Setup

### Operating System

There is no recommended operating system. You will be able to complete these tasks with every popular Operating System like Windows, MacOS, or Linux.

### Text Editor

You will need a text editor to work on these assignments. As a beginner, I recommend to use Visual Studio Code by Microsoft. It is a popular choice by many developers and you will find many sources to trouble shoot issues.

### Terminal and shell

The terminal is the way to interface with your operating system with text based commands. Every operating system has 

**Windows**: On Windows are CMD and PowerShell to run commands via the shell. Both will work well with the tasks at hand but the PowerShell brings a smoother experience with it. If you are using a current Windows installation, you will find PowerShell preinstalled on you machine.

**MacOS**: To run the terminal on MacOS, you can simply open the spot light search and type in terminal.

**Linux**: Each Linux Desktop Environment has a terminal or console application. 

### Web Browser

These challenges will work with every modern browser. If something isn't working as expected, try updating your browser. I recommend using Chrome or FireFox.

### Git

Git is a decentralised version control system that is used to track changes on a code base. It has become a de-facto standard in software development and other popular tools like Github or Gitlab are built upon Git.

Git repositories are cloned and thus, every developer has a version of the project on his own computer. That makes Git decentralised and very easy to restore if something might happen to the git hoster.

Git is known to be very hard to learn. Its interface is hard to understand and the documentation is confusing. But due to its popularity, it is important to start as early as possible to ge used to git.

#### How to use Git

There are different tools that allows you to interact with Git. Github Desktop is an application that let's you do basic operations on a git repository that is hosted on Github. It is feasible to work and solve the challenges in this set with Github Desktop. However, it is recommended to use the git CLI (command line interface). 

There are two reasons to why this approach is favoured over using a Git GUI. Firstly, you learn to work with the terminal and secondly, you get a feel for what is happening behind the scenes of Git.

#### How to install Git

To check, wether git is installed on your machine, you can run git version in your command prompt.

**Windows**: There are two ways to install Git on your Windows machine. You can either download the installer [here](www.git-scm.com) from the homepage and run the setup or you can use the Windows package manager winget.

``` bash

winget install --id Git.Git --exact

```

**MacOS**: As with windows, you can simply download the installer and run the setup.
An alternative way is to use Homebrew which is a popular package manager for MacOS.

**Linux**: Please check, wether git is already installed. If git is not installed you can use the package manager that comes with your distribution.
<<<<<<< HEAD
=======

## What you need to now about JavaScript

### var, let, and const

Like many other programming languages, JavaScript provides different possibilities to create so called variables. Variables are placeholder for values. You can think of them as drawers.

There are three things you can do with variables. You can declare them, intialise them and assign them.

Declaring a variable is simply writing down the variable. In JavaScript, there are three different ways to declare a variable. Let us assume, we need a variable x in our code. 

``` javascript

// Declaring a variable x with war. This is a global variable.
var x;

// Declaring a variable y with let. This is a scoped variable.
let y;

// Declaring a variable z with const. Note, that you cannot declare a variable with const without initialising it.
const z = 0;
```

To understand variables in JavaScript, it is important to understand the idea of scope. Normally, a scope is defined in JavaScript by curly braces.

Here is an example:

``` javascript

if(someCondition) {
    // this is a block
    if(anotherCondition) {
        // this is another block
    }
}

```

### Arrays
>>>>>>> readme-additions
