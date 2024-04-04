function skillMembers() {
    var members = [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 22 },
        { name: 'Doe', age: 30 }
    ];

    this.getMembers = function () {
        return members;
    };
}