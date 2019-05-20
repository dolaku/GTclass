var Students = function (name, favSbj, GPA) {
    this.name = name;
    this.favSbj = favSbj;
    this.GPA = GPA;

    this.readStudent = function () {
        console.log(`
            ===== Student =====\n
            Name: ${this.name}\n
            Favorite Subject: ${this.favSbj}\n
            GPA: ${this.GPA}\n
        `)
    }
}

module.exports = Students;