package com.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.models.Mess;
import com.demo.models.MessRating;

@Repository
public interface MessRatingDao extends JpaRepository<MessRating, Integer> {

	@Query(value="select * from mess where mess_id=:id",nativeQuery = true)
	Mess getMessById(int id);
	@Query(value=" select (select avg(rating)from messrating  group by mess_id having mess_id=:id) , m.* from mess m  join messrating r on m.mess_id=r.mess_id where m.mess_id=:id limit 1;",nativeQuery = true)
	Object getOneRating(int id);
	
}
