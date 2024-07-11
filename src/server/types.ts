type responseData = {
    submission_text: string;
    redirect_url: string | null;
    errors: [string];
    values: {
        firstName: string;
        lastName: string;
    };
};
