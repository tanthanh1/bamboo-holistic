"use client";
import { useForm, useController } from "react-hook-form";

import { Button, Select, MenuItem } from "@mui/material";
import { Box } from "@mui/system";
import { EditorField } from "@/components/form/EditorField.tsx";
import InputField from "@/components/form/InputField";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

import { getImageSrc, addListStyle } from "@/utils/other.js";
// import TextEditor from "@/components/form/TextEditor.tsx";

const NewsForm = () => {
    const { register, control, handleSubmit } = useForm({
        defaultValues: {
            title: "",
            shortDescription: "",
            tagList: [],
            fullDescription: "",
        },
    });

    const handleLoginSubmit = async (formValues) => {
        if (formValues.kind === "Tin tức") {
            const payload = new FormData();
            payload.set("title", formValues.title);
            payload.set("content", addListStyle(formValues.fullDescription));
            payload.set("short_desc", formValues.short_desc);
            payload.set("image_url", getImageSrc(formValues.fullDescription));
            payload.forEach((value, key) => {
                console.log(key, value);
            });
            const res = await fetch("/api/news", {
                method: "POST",

                body: payload,
            });
            if (res.status === 200) {
                toast.success("Success");
            }
        } else {
            const payload = new FormData();
            payload.set("title", formValues.title);
            payload.set("content", addListStyle(formValues.fullDescription));
            payload.set("short_desc", formValues.short_desc);
            payload.set("image_url", getImageSrc(formValues.fullDescription));
            payload.forEach((value, key) => {
                console.log(key, value);
            });
            const response = await fetch("/api/services", {
                method: "POST",

                body: payload,
            });
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit(handleLoginSubmit)}>
            <label className="block mb-2" htmlFor="">
                Danh mục:
            </label>
            <select
                className="bg-secondary mb-2 text-primary border p-1 rounded-md border-primary"
                id=""
                control={control}
                {...register("kind")}
            >
                <option value="Tin tức">Tin tức</option>
                <option value="Dịch vụ">Dịch vụ</option>
            </select>
            {/* 
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                value="Tin tức"
            >
                <MenuItem value="Tin tức">Tin tức</MenuItem>
                <MenuItem value="Dịch vụ">Dịch vụ</MenuItem>
            </Select> */}

            <label className="block" htmlFor="">
                Tiêu Đề:{" "}
            </label>
            <InputField
                name="title"
                label="Title"
                placeholder="Tiêu đề"
                control={control}
            />
            <label className="block" htmlFor="">
                Mô tả ngắn:
            </label>

            <InputField
                name="short_desc"
                label="short_desc"
                placeholder="Mô tả"
                control={control}
            />

            <EditorField
                name="fullDescription"
                control={control}
                label="Nội dung bài viết"
            />

            <Button variant="contained" type="submit">
                Upload
            </Button>
        </Box>
    );
};
export default NewsForm;
