
set -e 


echo "Adding Files to Git"
git add .
echo "Creating Commit"
read commit 
git commit -m "$commit"

echo "Pushing to Remote"
 
 echo getting branch name
 current_branch=$(git branch --show-current)
 echo current branch is $current_branch

git push origin $current_branch
echo "Done!"

