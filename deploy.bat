echo "Building & Deploying updates to GitHub..."


rem Build the project.
rem if using a theme, replace with `hugo -t <YOURTHEME>`
hugo --config config-prod.toml

rem Go To Public folder
cd public

rem Add changes to git.
git add .

rem Commit changes.
for /F "tokens=2" %%i in ('date /t') do set mydate=%%i
set mytime=%time%
set msg="Rebuilding site %mydate%:%mytime%"

rem if a commit message is passed, update here 
rem if %*.==. then
rem    msg="%*"

rem do commit
git commit -a -m %msg%

rem Push source and build repos.
rem Assumes that default upstream is set
rem git push --set-upstream <remote_name> master:master the fir s time
git push

cd ..