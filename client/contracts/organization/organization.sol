contract Organization {
    
    uint time;
    bytes32 orgId;
    string orgName;
    string orgType;
    string orgAddress;
    string adminName;
    string adminPK;
    string approverPK;
    
    event OrganizationCreated(uint indexed _time, bytes32 indexed _orgId, string _orgName, string _orgType, string _orgAddr, string _adminName, string _adminPK, string _approverPK);
    
    function Organization(string _orgName, string _orgType, string _orgAddr, string _adminName, string _adminPK, string _approverPK){
        
        time = now;
        orgId = sha3(time, _orgName, _orgType, _orgAddr);
        orgName =_orgName;
        orgType = _orgType;
        orgAddress = orgAddress;
        adminName = _adminName;
        adminPK = _adminPK;
        approverPK = _approverPK;
        
        OrganizationCreated(time, orgId, orgName, orgType, orgAddress, adminName, adminPK, approverPK);
    }
}