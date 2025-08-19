package com.springboot.spring_boot_shoe.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "category")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_category")
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "description", columnDefinition = "TEXT")
    private String description;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "parent_id_category")
    private Category parent;

    @OneToMany(mappedBy = "parent" , cascade = CascadeType.ALL)
    private List<Category> subs;

    public Category() {}

    public Category(String name, String description, Category parent) {
        this.name = name;
        this.description = description;
        this.parent = parent;
    }

    // --- Getter & Setter ---
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Category getParentCategory() {
        return parent;
    }

    public void setParentCategory(Category parentCategory) {
        this.parent = parentCategory;
    }

    public List<Category> getSubCategories() {
        return subs;
    }

    public void setSubCategories(List<Category> subCategories) {
        this.subs = subCategories;
    }

    @Override
    public String toString() {
        return "Category{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", parent=" + parent +
                ", subs=" + subs +
                '}';
    }
}
