var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 1] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 2] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 3] = "WINDOW";
})(SeatChoice || (SeatChoice = {}));
var seat = SeatChoice.AISLE;
