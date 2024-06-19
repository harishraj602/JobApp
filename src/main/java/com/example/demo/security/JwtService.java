package com.example.demo.security;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.security.SignatureAlgorithm;

@Component
public class JwtService {
	
	public static final String SECRETKEY="lp/QAh6zjfyfgGURBj7/1SDbhGrTM7sax3R+WrMxYNk=";
  
	public String generateToken(String username) {
		Map<String,Object>claims=new HashMap<>();
		return createToken(claims,username);
	}
	
	public String extractUsername(String token) {
		return extractClaim(token,Claims::getSubject);
	}
	
	public Date extractExpiration(String token) {
		return extractClaim(token,Claims::getExpiration);
	}
	
	public <T> T extractClaim(String token,Function<Claims,T>claimsResolver) {
		final Claims claims=extractAllClaims(token);
		return claimsResolver.apply(claims);
	}
	
	private Claims extractAllClaims(String token) {
		return Jwts.parser().setSigningKey(getSignKey()).build().parseClaimsJws(token).getBody();
	}
	
	private Boolean isTokenExpired(String token) {
		return extractExpiration(token).before(new Date());
	}
	
	public Boolean validateToken(String token,UserDetails userDetails) {
		final String username=extractUsername(token);
		return (username.equals(userDetails.getUsername())&&!isTokenExpired(token));
	}
	
	public String createToken(Map<String,Object>claims,String username) {
		return Jwts.builder().setClaims(claims).setSubject(username).setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis()+1000*60*60))
				.signWith(getSignKey(),io.jsonwebtoken.SignatureAlgorithm.HS256).compact();
	}
 
	private Key getSignKey() {
	    byte[]bytes=Decoders.BASE64.decode(SECRETKEY);
		return Keys.hmacShaKeyFor(bytes);
	}
}