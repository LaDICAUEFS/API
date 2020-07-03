class Processor {
    static Process(data){
        let split = data.split('\n');
        let rows = [];
        split.forEach(element => {
            let json = {
                dado: element
            }
            rows.push(json);
        });
        return rows;
    }
}

module.exports = Processor;