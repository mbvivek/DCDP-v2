contract User {

    uint time;
    string name;
    string PK;
    string approverPK;

    event UserCreated(uint time, string name, string PK, string approverPK);

    function User(string _name, string _PK, string _approverPK) public payable {
        
        time = now;
        name = _name;
        PK = _PK;
        approverPK = _approverPK;

        UserCreated(time, name, PK, approverPK);
    }
}