package  hs.enums;



import com.fasterxml.jackson.annotation.JsonIgnore;


public enum Designation {

    SSE("Senior software engineer","SSE"),
    ASE("Assistant systems engineer","ASE");
    private String designation;

    @JsonIgnore
    private  String description;


    Designation(String designation,String description){
        this.description = description;
        this.designation =designation;
    }

    public String getDesignation() {
        return designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}