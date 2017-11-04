This is a septnet student projects.


## Create a new repository
```bash
git clone https://git.septnet.cn/surface/student.git
cd student
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master
```

## Existing folder
```bash
cd student
git init
git remote add origin https://git.septnet.cn/surface/student.git
git add .
git commit -m "Initial commit"
git push -u origin master
```

## Existing Git repository
```bash
cd studnet
git remote add origin https://git.septnet.cn/surface/student.git
git push -u origin --all
git push -u origin --tags
```
## Merge Branch
```bash
git merge origin/[branch] --allow-unrelated-histories
```

## Merge Checkout
```bash
git checkout [branch]
```

## Merge Checkout
```bash
git push origin branch:[branch]
```

<!-- 
## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myTabs tabs
```

Then, to run it, cd into `myTabs` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.
 -->

commond d 选择相同