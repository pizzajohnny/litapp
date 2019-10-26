
# Usage: ./update_version.sh 1.16

function updateFile () {
    FILE=$1
    LINE=$2
    OLD=$3
    NEW=$4
    echo Updating ${FILE}:${LINE}
    sed -i $LINE"s/$OLD/$NEW/" $FILE
}

# Set new package version string
# app.json
FILE=./app.json
LINE=3
newValue=$1
orgLine=$(sed "$LINE!d" $FILE)
orgValue=$(echo $orgLine | grep -o -P '(?<=releases/litapp-).*(?=.apk",)')
updateFile $FILE $LINE $orgValue $1

# package.json
updateFile ./package.json 3 $orgValue $newValue

# package-lock.json
updateFile ./package-lock.json 3 $orgValue $newValue

# config.xml
updateFile ./config.xml 2 $orgValue $newValue

# _config.yml
updateFile ./docs/_config.yml 7 $orgValue $newValue

# index.md
echo Updating ./docs/index.md
today=$(date --iso)
sed -i "7d" ./docs/index.md
sed -i "5i- [v$newValue](https://theilluminatus.github.io/litapp/releases/litapp-${newValue}.apk) ($today)" ./docs/index.md

# Increment version numbers
# globals.ts
FILE=./src/providers/globals.ts
LINE=16
orgLine=$(sed "$LINE!d" $FILE)
orgValue=$(echo $orgLine | grep -o -P '(?<=private version = ).*(?=;)')
let newValue=$((orgValue + 1))
updateFile $FILE $LINE $orgValue $newValue

# app.json
updateFile ./app.json 2 $orgValue $newValue