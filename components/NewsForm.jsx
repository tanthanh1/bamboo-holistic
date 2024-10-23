"use client";
import { useForm, useController } from "react-hook-form";

import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { EditorField } from "@/components/form/EditorField.tsx";
import InputField from "@/components/form/InputField";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
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
            payload.set("content", formValues.fullDescription);
            payload.forEach((value, key) => {
                console.log(key, value);
            });
            const response = await fetch("/api/news", {
                method: "POST",

                body: payload,
            });
        } else {
            const payload = new FormData();
            payload.set("title", formValues.title);
            payload.set("content", formValues.fullDescription);
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
            <select id="" control={control} {...register("kind")}>
                <option value="Tin tức">Tin tức</option>
                <option value="Dịch vụ">Dịch vụ</option>
            </select>
            <label className="block" htmlFor="">
                Tiêu Đề:{" "}
            </label>
            <InputField
                name="title"
                label="Title"
                placeholder="Tiêu đề"
                control={control}
            />

            <EditorField
                name="fullDescription"
                control={control}
                label="Nội dung bài viết"
            />

            <Button type="submit">Upload</Button>
        </Box>
    );
};
export default NewsForm;
