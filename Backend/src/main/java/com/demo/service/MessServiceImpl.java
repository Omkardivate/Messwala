package com.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.demo.dao.MessDao;
import com.demo.models.Mess;

@Service
public class MessServiceImpl implements MessService {

	@Autowired
	private MessDao messDao;
	
//	@Autowired
//    private PasswordEncoder passwordEncoder;
	
	@Override
	public Mess addMess(Mess m) {
		
		Mess m1=messDao.getByEmail(m.getEmail());
		if(m1==null) {
//			String encodedPassword = passwordEncoder.encode(m.getPassword());
//			m.setPassword(encodedPassword);
			messDao.save(m);
			return m;
		}
		return null;
	}

	@Override
	public Mess validate(Mess m) {
		Mess existingMess = messDao.getByEmail(m.getEmail());
//        if (existingMess != null && passwordEncoder.matches(m.getPassword(), existingMess.getPassword())) {
//            return existingMess;
//        }
//        return null;
        return existingMess;
	}
     
	public Mess getMessByEmail(String email) {
		return messDao.getByEmail(email);
	}
	
	@Override
	public List<Mess> getAllMess() {
		return messDao.getAllMess();
	}

	@Override
	public Mess getMessById(int id) {
		Mess m=messDao.getMessById(id);
		return m;
	}

	@Override
	public Mess updateMess(int id,Mess m) {
		
		Mess mess=messDao.getMessById(id);
		if(mess!=null) {
//			String encodedPassword = passwordEncoder.encode(m.getPassword());
//			mess.setPassword(encodedPassword);
		    mess.setCity(m.getCity());
		    mess.setEmail(m.getEmail());
		    mess.setLandmark(m.getLandmark());
		    mess.setMessName(m.getMessName());
		    mess.setMessTime(m.getMessTime());
		    mess.setMobile(m.getMobile());
		    mess.setUserName(m.getUserName());
		    mess.setPassword(m.getPassword());
		    mess.setRating(m.getRating());
		    mess.setState(m.getState());
		    mess.setChoice(m.getChoice());
		    mess.setStatus(m.getStatus());
		    return messDao.save(mess);   
		}
		return null;
	}

	public List<Object> getParticularMess(int id) {
		return messDao.getOneMess(id);
	}

	@Override
	public int updateMessPlans(String messPlan,double messPlanPrice ,int id) {
		 Mess m1=messDao.getMessById(id);
		 if(m1!=null) {
	      messDao.updateMessPlans(messPlan,messPlanPrice,id);
	      return 1;
		 }
		return 0;
	}

	@Override
	public int forgotPassword(String password, String email) {
//		String encodedPassword = passwordEncoder.encode(password);
//		return messDao.forgotPassword(encodedPassword,email);
		return messDao.forgotPassword(password,email);
	}
}
