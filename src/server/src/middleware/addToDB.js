import { Child, Guardian } from '../Models/Form';

/*  This is a function that will add the signup form... 
    data into the db.
*/
export default (req, res) => {
    // Store form data in variables
    const guard_name = req.body.guard_name;
    const guard_email = req.body.guard_email;
    const guard_phone = req.body.guard_phone;
    const children = [...req.body.children];
    const childDocs = [];

    // Create guardian document
    const newGuardian = new Guardian({
        guardian_name: guard_name,
        guardian_email: guard_email,
        guardian_phone: guard_phone
    });

    // Loop thru array and create a document for each child
    // store docs into childDocs array 
    // (insert array in guardian doc)
    children.map(function (child) {
        // Create child document
        const newChild = new Child({
            child_name: child.child_name,
            child_age: child.age,
            shirt_size: child.shirt_size,
            guardian_id: newGuardian._id
        });
        childDocs.push(newChild);
    });

    // Create guardian document
    newGuardian.children = [...childDocs];
    
    // save guardian(and children) to db
    newGuardian.save(function (err) {
        if (err) {
            res.json({error: "database error"})
        } else {
            res.json({success: "Thanks, data was saved!"});
        }
    });
}