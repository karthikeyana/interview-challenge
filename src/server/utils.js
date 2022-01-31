module.exports = (source, inputStr) => {
    let filteredItem;

    filteredItem =  source.filter((item)=> item.name.toLowerCase().includes(inputStr.toLowerCase()));

    return filteredItem;
}

