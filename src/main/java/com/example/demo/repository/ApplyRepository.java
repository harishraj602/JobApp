package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Applydata;

public interface ApplyRepository extends JpaRepository<Applydata,Long> {

}
