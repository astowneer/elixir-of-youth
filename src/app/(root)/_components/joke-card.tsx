"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { JokeForm } from "./joke-form";

function JokeCard() {
  return (
    <Card className="flex flex-col md:flex-row w-full max-w-3xl bg-white shadow-lg rounded-2xl overflow-hidden">
      <CardContent className="flex flex-col p-4 w-full">
        <JokeForm type="create" />
      </CardContent>
    </Card>
  );
}

export { JokeCard };
