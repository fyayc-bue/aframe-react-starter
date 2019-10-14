const IconLibraryImages = [
    'insert array of all png files paths'
];

// Library Builder
const buildDictonary = (array) => {
    return array.map((element) => {
        return {
            id: element.split('_')[2],
            type: element.split('/')[1],
            path: element + '.png',
            titel: element.split('_')[3].replace('-',' '),
        };
    });
}

// Builder
console.log(JSON.stringify(buildDictonary(IconLibraryImages)));