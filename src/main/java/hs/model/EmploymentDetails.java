package hs.model;

import hs.enums.Designation;

import java.util.Date;

public class EmploymentDetails {
    private Designation designation;
    private Date dateOfJoining;
    private Date dateOfReleaving;
    private  CompensationDetails compensationDetails;

    public CompensationDetails getCompensationDetails() {
        return compensationDetails;
    }

    public void setCompensationDetails(CompensationDetails compensationDetails) {
        this.compensationDetails = compensationDetails;
    }

    public Designation getDesignation() {
        return designation;
    }

    public void setDesignation(Designation designation) {
        this.designation = designation;
    }

    public Date getDateOfJoining() {
        return dateOfJoining;
    }

    public void setDateOfJoining(Date dateOfJoining) {
        this.dateOfJoining = dateOfJoining;
    }

    public Date getDateOfReleaving() {
        return dateOfReleaving;
    }

    public void setDateOfReleaving(Date dateOfReleaving) {
        this.dateOfReleaving = dateOfReleaving;
    }
}
