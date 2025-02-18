"use client";
import IsPrivate from "@/components/authWrapper/IsPrivate";
import React, { useContext, useEffect } from "react";

export default function ContentPage() {
  return (
    <>
      <IsPrivate>Test</IsPrivate>
    </>
  );
}
