export interface ITypingState {
    userInput: string
    startTime: number | null
    wpm: number
    errorCount: number
    isCompleted: boolean
};

export interface IUserInputPayload {
    input: string
    sampleText: string
};