#!/bin/bash
cd ..
npx styleguidist build
echo build finished... start copying
cp -R ~/projects/loopline-x/frontend/styleguide/build ~/projects/loop-now-styleguide/
cp -R ~/projects/loopline-x/frontend/styleguide/index.html ~/projects/loop-now-styleguide/
echo deleting copyied files...
rm -rf -R ~/projects/loopline-x/frontend/styleguide/build
rm -rf ~/projects/loopline-x/frontend/styleguide/index.html
echo copying successfull!



