const handleChildFieldChange = (e) => {
    // Assign children array, user input, 
    // selected html tag, and index in variables
    let ChildrenArray = [...this.state.form.children];
    let select_input = e.target.value;
    let id = e.target.id;
    let i = this.state.index;

    // verify field was complete
    let nameCompleted = false;
    let ageCompleted = false;
    let shirtCompleted = false;

    // map thru array
    // assign "child" to every object instance in array
    ChildrenArray.map(() => {
        // check to see which field is being updated
        switch (id) {
            case "child_name":
                // update the correct value in object
                ChildrenArray[i].child_name = user_input;
                // update the field's state
                this.setState({children: ChildrenArray});
                nameCompleted = true;


            case "age":
                // update the correct value in object
                ChildrenArray[i].age = select_input;
                // update the field's state
                this.setState({children: ChildrenArray});
                ageCompleted = true;
            
            case "shirt_size":
                // update the correct value in object
                ChildrenArray[i].shirt_size = select_input;
                // update the field's state
                this.setState({children: ChildrenArray});
                shirtCompleted = true;
        }
    });

    if (nameCompleted && ageCompleted && shirtCompleted) {
        // if all the fields are complete, increment the index
        this.setState({index: i++});
        nameCompleted = false;
        ageCompleted = false;
        shirtCompleted = false;
    }
}

/*
handleChildChange={this.handleChild_Name_Change}
handleAgeChange={this.handleAgeChange}
handleShirtSizeChange={this.handleShirtSizeChange}

*/ 