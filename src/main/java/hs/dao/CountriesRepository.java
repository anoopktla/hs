package hs.dao;

import hs.model.Country;
import hs.model.Employee;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "Countries", path = "Countries")
public interface CountriesRepository  extends MongoRepository<Country, String> {
}
