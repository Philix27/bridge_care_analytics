#!/bin/bash

# chmod +x getdto.sh; ./getdto.sh

cd ..;
current_dir=$(pwd);
my_project=.;
cd nottie-client;
# cd "${projectFile}/nottie-server"
# cp -rp "${current_dir}/nottie-server/src/_dto" "./src";
cat "${current_dir}/nottie-server/src/_dto" "./src";

echo -e "\033[0;32mCopied DTO  scuccessfully!";
