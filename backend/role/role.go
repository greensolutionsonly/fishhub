package role

type RoleType uint8

const (
	Admin RoleType = iota
	WholeSaler
	Retailor
	Collector
	Fisher
)

type Role struct {
	role RoleType
}
