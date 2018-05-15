package hs.model;

import java.util.Date;

public class EmploymentDetails {
    private Date dateOfJoining;
    private Date dateOfReleaving;

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
