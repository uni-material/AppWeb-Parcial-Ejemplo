export class Exams{

    //#region Attributes
    id: number;
    patientId: number;
    examinerId: number;
    examDate: string;
    orientationScore: number;
    registrationScore: number;
    attentionAndCalculationScore: number;
    recallScore: number;
    languageScore: number;

    constructor(id: number, patientId: number, examinerId: number, examDate:string, orientationScore: number, registrationScore: number, attentionAndCalculationScore: number, recallScore: number, languageScore: number) {
        this.id = id;
        this.patientId = patientId;
        this.examinerId = examinerId;
        this.examDate = examDate;
        this.orientationScore = orientationScore;
        this.registrationScore = registrationScore;
        this.attentionAndCalculationScore = attentionAndCalculationScore;
        this.recallScore = recallScore;
        this.languageScore = languageScore;
    }

    //#region Methods

    getTotalScore():number{
        return (this.orientationScore + this.registrationScore + this.attentionAndCalculationScore + this.recallScore+ this.languageScore)

    }

    getAverageScore(exams: Exams[]): number{
        const totalScores = exams.reduce((sum, exam)=> sum+exam.getTotalScore(), 0);
        return exams.length > 0 ? totalScores / exams.length: 0;
    }

    getExamsById(exams: Exams[], examinerId: number): number{
        return exams.filter((exam) => exam.examinerId === examinerId).length;
    }



}